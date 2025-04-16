import React, { useEffect, useState } from 'react';
import { getData, postData, getAllFileList } from '../service/apiServices';
import { Label, Input, FormGroup, Form, Row, Col, Card, CardBody, CardTitle, CardText, Container, Toast } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import WagonDetails from './WagonDetails';
import WagonDetails2 from './WagonDetails2';
import Charges from './Charges';

function FormStep1() {
  const [formData, setFormData] = useState(null);
  const [fileUploadLoader, setFileUploadLoader] = useState(false);
  const [wagonData, setWagonData] = useState(null);
  const [charges, setCharges] = useState(null);
  const [activeTab, setActiveTab] = useState('1');
  const [fileList, setFileList] = useState([]);
  const [viewId, setViewId] = useState(null);

  const getAllDetails = async (id) => {
    try {
      const response = await getData(id);
      setFormData(response.data.result?.formData);
      setWagonData(response.data.result?.wagonDetails);
      setCharges(response.data.result?.charges[0]);
      toast.success('Data Fetched successfully for '+ id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (viewId) {
      console.log("Fetching details for viewId:", viewId);
      getAllDetails(viewId);
    }
  }, [viewId]);

  const fetchFileList = async () => {
    try {
      const response = await getAllFileList();
      setFileList(response?.data?.result);
    } catch (error) {
      console.error("Error fetching file list:", error);
    }
  };

  useEffect(() => {
    fetchFileList();
  }, []);

  useEffect(() => {
    if (formData && formData.length > 0) {
      let a = formData.map(e => {
        return e.fieldName || ''
      })
      console.log(a.toString());;
    }
  }, [formData]);

  const onFileUpload = async (e) => {
    setFileUploadLoader(true);
    const file = e.target.files[0];
    if (file) {
      try {
        let resp = await postData({});
        setTimeout(() => {
          fetchFileList();
          setFileUploadLoader(false);
          toast.success('File uploaded successfully');
        }, 300);
      } catch (error) {
        console.error("Error uploading document:", error);
        setFileUploadLoader(false);
        toast.error('Error uploading file');
      }
    }
  }

  const { control, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (formData) {
      formData.forEach((e) => {
        setValue(e.fieldName, e.fieldValue);
      });
    }
  }, [formData, setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Container className='p-2'>
      <h2> RR DETAILS</h2>
      <Card className="mb-3" style={{ width: 'auto' }}>
        <CardBody>
          <CardTitle tag="h5">Upload Document</CardTitle>
          <CardText>Upload a document to fetch additional details.</CardText>
          <Input
            type="file"
            onChange={onFileUpload}
            multiple={true}
          // onlyAccept=".pdf"
          />
          {fileUploadLoader && (
            <div className="text-center mt-3">
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span className="ms-2">Uploading...</span>
            </div>
          )}
        </CardBody>
      </Card>
      <div className="d-flex mb-3" style={{ maxHeight: '80px', overflowX: 'auto' }}>
        {fileList && fileList.length > 0 ? (
          fileList.map((file, index) => (
            <div onClick={() => { setViewId(file?.id) }} key={index} style={{ cursor: 'pointer', border: '1px solid black', background: "rgb(227, 182, 182)" }} className="d-flex align-items-center me-3">
              <i className="bi bi-file-earmark" style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}></i>
              <span className='p-1'>{file?.fileName}-{file?.id}</span>
            </div>
          ))
        ) : (
          <p>No files available</p>
        )}
      </div>
      <hr />
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => toggleTab('1')}
          >
            Form Data
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => toggleTab('2')}
          >
            Wagon Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => toggleTab('3')}
          >
            Charges
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              {[
                'total_green_points_earned',
                'commodity_description',
                'zone',
                'sender_weight',
                'weighted_at_class',
                'charged_via',
                'weighted_at_rate',
                'risk_rate',
                'delivery_book_folio_no',
                'actual_weight',
                'over_weight_chargeable_at_punitive_rate',
                'no_of_articles',
                'traffic_type',
                'hsn_code',
                'train_wagon_load',
                'rate_type',
                'commodity_code',
                'consignees_name',
                'wagons',
                'chargeable_weight_at_normal_rate',
                'tax_invoice_number',
                'to_station_siding',
                'from_station_siding',
                'rr_no',
                'f_note_number',
                'handled_by',
                'consignors_address',
                'consignors_name',
                'fnr',
                'distance_in_km',
                'f_note_date',
                'packaging_code',
                'freight',
                'total_weight',
                'rr_date',
                'invoice_date',
                'total_freight',
                'invoice_number',
              ].map((fieldName, index) => (
                <Col md={3} key={index}>
                  <FormGroup>
                    <Label for={fieldName}>{fieldName.replace(/_/g, ' ').toUpperCase()}</Label>
                    <Controller
                      name={fieldName}
                      control={control}
                      defaultValue=""
                      render={({ field }) => <Input {...field} id={fieldName} />}
                    />
                  </FormGroup>
                </Col>
              ))}
            </Row>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </TabPane>
        <TabPane tabId="2">
          <WagonDetails2 wagonData={wagonData} />
        </TabPane>
        <TabPane tabId="3">
          <Charges charges={charges} />
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default FormStep1;

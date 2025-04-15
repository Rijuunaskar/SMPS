import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button, Container, Input } from 'reactstrap';
import { ArrowDownCircle, ArrowUpCircle, PlusCircle, Trash2 } from 'react-feather';

/**[
    {
      [
      {
        "id": 775,
        "fileId": 19,
        "srNo": 1,
        "owningRailwayParty": "SEC",
        "type": "BOXNHSM1",
        "wagoNo": "12140333610",
        "cc": 68,
        "tare": 22.53,
        "noOfArticle": 0,
        "commodityCode": 2991129,
        "grossWt": 90.53,
        "dipMeasurements": "",
        "dipWt": 0,
        "permissibleCc": 68,
        "overWt": 0,
        "overWtNormalRate": 0,
        "overWtPunitiveRate": 0,
        "chargeableWt": 69,
      },
}], */
function WagonDetails2({ wagonData }) {
    const { control, handleSubmit, register, reset } = useForm({
        defaultValues: {
            wagons: wagonData,
        },
    });

    useEffect(() => {
        if (wagonData) {
            reset({ wagons: wagonData });
        }
    }, [wagonData, reset]);

    const { fields, append, remove, insert } = useFieldArray({
        control,
        name: 'wagons',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container className='p-2' style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Sr No</th>
                            <th>Owning Railway Party</th>
                            <th>Type</th>
                            <th>Wagon No</th>
                            <th>CC</th>
                            <th>Tare</th>
                            <th>No of Article</th>
                            <th>Commodity Code</th>
                            <th>Gross Wt</th>
                            <th>Dip Measurements</th>
                            <th>Dip Wt</th>
                            <th>Permissible CC</th>
                            <th>Over Wt</th>
                            <th>Over Wt Normal Rate</th>
                            <th>Over Wt Punitive Rate</th>
                            <th>Chargeable Wt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((item, index) => (
                            <tr key={item.id}>
                                <td >
                                    <div className='d-flex'><button type="button" onClick={() => insert(index, {})}>
                                        <ArrowUpCircle size={20} />
                                    </button>
                                        <button type="button" onClick={() => remove(index)}>
                                            <Trash2 size={20} />
                                        </button></div>
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }} {...register(`wagons.${index}.srNo`)} defaultValue={item.srNo} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.owningRailwayParty`)} defaultValue={item.owningRailwayParty} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.type`)} defaultValue={item.type} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.wagoNo`)} defaultValue={item.wagoNo} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.cc`)} defaultValue={item.cc} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.tare`)} defaultValue={item.tare} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.noOfArticle`)} defaultValue={item.noOfArticle} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.commodityCode`)} defaultValue={item.commodityCode} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.grossWt`)} defaultValue={item.grossWt} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.dipMeasurements`)} defaultValue={item.dipMeasurements} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.dipWt`)} defaultValue={item.dipWt} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.permissibleCc`)} defaultValue={item.permissibleCc} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.overWt`)} defaultValue={item.overWt} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.overWtNormalRate`)} defaultValue={item.overWtNormalRate} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.overWtPunitiveRate`)} defaultValue={item.overWtPunitiveRate} />
                                </td>
                                <td>
                                    <Input style={{ width: '110px' }}{...register(`wagons.${index}.chargeableWt`)} defaultValue={item.chargeableWt} />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <Button type="submit" color='primary'>Submit</Button>
            </form>
        </Container>
    );
}

export default WagonDetails2;


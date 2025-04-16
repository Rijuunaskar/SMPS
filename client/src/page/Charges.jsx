import React from 'react'
import { Container } from 'reactstrap';
import { useForm } from 'react-hook-form';

function Charges({ charges }) {
    const { register, handleSubmit, setValue } = useForm();

    React.useEffect(() => {
        if (charges) {
            Object.keys(charges).forEach((key) => {
                setValue(key, charges[key]);
            });
        }
    }, [charges, setValue]);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} className="form-step">
                <h4>Other Charges</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <div className="form-group">
                        <label htmlFor="otherChargesDcla">Other Charges DCLA</label>
                        <input
                            id="otherChargesDcla"
                            className="form-control"
                            {...register('otherChargesDcla')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otherChargesEnhc">Other Charges ENHC</label>
                        <input
                            id="otherChargesEnhc"
                            className="form-control"
                            {...register('otherChargesEnhc')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otherChargesFauc">Other Charges FAUC</label>
                        <input
                            id="otherChargesFauc"
                            className="form-control"
                            {...register('otherChargesFauc')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otherChargesGst">Other Charges GST</label>
                        <input
                            id="otherChargesGst"
                            className="form-control"
                            {...register('otherChargesGst')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otherChargesPol1">Other Charges POL1</label>
                        <input
                            id="otherChargesPol1"
                            className="form-control"
                            {...register('otherChargesPol1')}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </Container>
    );
}

export default Charges
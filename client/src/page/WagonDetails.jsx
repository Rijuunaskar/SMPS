import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Table, Input, Container } from "reactstrap";

function WagonDetails({ wagonData }) {
    const { control, handleSubmit } = useForm({
        defaultValues: wagonData,
    });

    const onSubmit = (data) => {
        console.log("Updated Data:", data);
    };

    return (
        <Container className='p-2' style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Table bordered>
                    <thead>
                        <tr>
                            {wagonData &&
                                Object.keys(wagonData[0])
                                    .filter(
                                        (key) =>
                                            ![
                                                "createdBy",
                                                "updatedBy",
                                                "deletedBy",
                                                "createdAt",
                                                "updatedAt",
                                                "deletedAt",
                                                "id",
                                                "fileId",
                                            ].includes(key)
                                    )
                                    .map((key) => (
                                        <th key={key}>
                                            {key}
                                        </th>
                                    ))}
                        </tr>
                    </thead>
                    <tbody>
                        {wagonData &&
                            wagonData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.entries(row)
                                        .filter(
                                            ([key]) =>
                                                ![
                                                    "createdBy",
                                                    "updatedBy",
                                                    "deletedBy",
                                                    "createdAt",
                                                    "updatedAt",
                                                    "deletedAt",
                                                    "id",
                                                    "fileId"
                                                ].includes(key)
                                        )
                                        .map(([key, value]) => (
                                            <td
                                                key={key}
                                            >
                                                <Controller
                                                    name={`${rowIndex}.${key}`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input
                                                            {...field}
                                                            type="text"
                                                            defaultValue={value}
                                                            style={{
                                                                whiteSpace: 'nowrap',
                                                                width: '150px',
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </td>
                                        ))}
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </form>
        </Container>

    );
}

export default WagonDetails;
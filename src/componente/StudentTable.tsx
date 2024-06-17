import { Student } from "@/types/Student";

type Props ={
    students: Student[];
}

export const StudentTable = ({ students }: Props) => {
    return (
        <table style={{
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            overflow: 'hidden',
            marginBottom: '1rem'
        }}>
            <thead>
                <tr style={{
                    textAlign: 'left',
                    borderBottom: '1px solid #ccc',
                    backgroundColor: '#333',
                    color: '#fff'
                }}>
                    <th style={{ padding: '0.75rem' }}>Nome</th>
                    <th style={{ padding: '0.75rem' }}>Status</th>
                    <th style={{ padding: '0.75rem' }}>Nota 1</th>
                    <th style={{ padding: '0.75rem' }}>Nota 2</th>
                    <th style={{ padding: '0.75rem' }}>Nota Final</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item => (
                    <tr key={item.id} style={{
                        textAlign: 'left',
                        borderBottom: '1px solid #ccc'
                    }}>
                        <td style={{
                            padding: '0.75rem',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <img src={item.avatar} alt={item.name} style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '50%',
                                marginRight: '0.5rem'
                            }} />
                            <div>
                                <div>{item.name}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td style={{ padding: '0.75rem' }}>
                            {item.active ?
                                <div style={{
                                    padding: '0.25rem 0.5rem',
                                    display: 'inline-block',
                                    borderRadius: '0.25rem',
                                    border: '1px solid #2f855a',
                                    backgroundColor: '#48bb78',
                                    color: '#fff',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase'
                                }}>Active</div>
                                :
                                <div style={{
                                    padding: '0.25rem 0.5rem',
                                    display: 'inline-block',
                                    borderRadius: '0.25rem',
                                    border: '1px solid #e53e3e',
                                    backgroundColor: '#f56565',
                                    color: '#fff',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase'
                                }}>Inactive</div>
                            }
                        </td>
                        <td style={{ padding: '0.75rem' }}>{item.grade1}</td>
                        <td style={{ padding: '0.75rem' }}>{item.grade2}</td>
                        <td style={{ padding: '0.75rem' ,font:"bold" }}>{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

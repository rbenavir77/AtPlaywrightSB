import oracledb from './FonofarmaciaDb'; // Import the initialized oracledb from db.ts


export async function executeQuery(statement: string, binds: any[] = [], opts: oracledb.ExecuteOptions = { outFormat: oracledb.OUT_FORMAT_OBJECT }): Promise<any> {
    let connection: oracledb.Connection | undefined;

    try {
        // Obtener una conexión del pool
        connection = await oracledb.getConnection();
        const result = await connection.execute(statement, binds, opts);

        return result.rows;
    } catch (err: any) {
        console.error('Query execution error:', {
            message: err.message,
            statement,
            binds,
            opts,
        });
        return { error: err.message };
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err: any) {
                console.error('Error closing connection:', err.message);
            }
        }
    }
}

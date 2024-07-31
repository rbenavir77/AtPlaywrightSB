import dbClient from './db';
export async function getOrder(orderNumber:number) {
  try {
    const query = 'SELECT * from orders o where order_number = $1';
    const values = [orderNumber];
    const res = await dbClient.query(query, values);
    return res.rows;
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
  }
}
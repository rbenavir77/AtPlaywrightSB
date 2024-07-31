
const pedidoClienteQuery =  `SELECT DD_ID_RECVTA,DD_NUMERO_SERVICIO ,DD_NOMBRE_CONTACTO,DD_ID_PEDIDO,DD_ESTADO,DD_FEC_CREACION FROM DD_PEDIDO_CLIENTE WHERE DD_NUMERO_SERVICIO = 1`;
const trackingDespachoQuery = `SELECT * FROM FONOFARMACIA.FN_TRACKING_DESPACHO ftd WHERE FN_NUMERO_SERVICIO = 1`;
const fnPedidosMdoctoQuery = `select * from fn_pedidos_mdocto where fn_id_pedido = 1`;
const itlTxposoQuery = `select * from fn_pedidos_mdocto where fn_id_pedido = 1`;
const itlPagooQuery = `select * from ITL_PAGO WHERE VENT_CORR  = 1`;
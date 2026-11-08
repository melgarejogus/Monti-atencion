# Diseño: sesiones de mesa y códigos temporales

## Flujo
1. Mozo autenticado abre mesa N.
2. Backend genera código aleatorio de 6 dígitos con generador criptográfico, almacena solo hash con sal/pepper del lado servidor y crea una sesión de ocupación única.
3. Cliente escanea QR fijo (?mesa=N), ingresa código. El servidor verifica código, límites de intentos y mesa abierta, y emite credencial de sesión de alcance limitado.
4. Cada operación de cliente se autoriza en backend contra la sesión de ocupación vigente, mesa, vencimiento y revocación. Nunca confiar en un estado de JavaScript.
5. Al cerrar mesa, revocar sesión y credenciales. La próxima apertura usa un identificador y código nuevos.
6. Regenerar código revoca el anterior y sus accesos asociados.

## Seguridad imprescindible
- No guardar códigos ni secretos en GitHub o en documentos Firestore legibles desde el navegador.
- Cloud Functions o backend confiable para emitir/verificar códigos y aceptar solicitudes; Firestore mantiene escrituras de clientes cerradas.
- Personal autenticado con roles definidos y verificados en backend, no solo botones ocultos.
- Límite de intentos de código, frecuencia de mensajes, tamaños y campos, App Check como defensa adicional, registro de eventos y expiración de sesiones.
- Los QR impresos son públicos y permanentes. El código temporal es una barrera contra enlaces reutilizados, no una garantía de presencia física: un cliente puede compartir el código mientras la mesa está abierta.
- Las funciones de backend pueden requerir habilitar plan Blaze; comprobar costos antes de desplegar.

## Estado
Especificación pendiente de implementación. La página actual sigue siendo demostración y no valida códigos ni habilita solicitudes reales.

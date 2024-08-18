export function onRequest (context, next) {
    // interceptar los datos de una solicitud.
    // opcionalmente, modifica las propiedades en `locals`.
    context.locals.text = "Texto desde el Middleware";

    // devuelve una respuesta o el resultado de llamar a `next()`.
    return next();
};
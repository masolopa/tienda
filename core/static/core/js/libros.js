//Crear funcion ready
$(document).ready(function () {

    //Crear invocación de la api donde se obtienen los datos:
    //https://freetestapi.com/api/v1/books
    $.get('https://freetestapi.com/api/v1/books', function (data) {
        //usando $.get recorrer la lista de ropas

        $.each(data, function (i, item) {
            //Crear codigo html para agregar los productos al contenedor
            html = `
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${item.cover_image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">
                        ${item.title}
                        </h5>
                        <h6 class="card-title">
                        ${item.author}
                        </h6>
                        <p class="card-text">
                        ${item.description}
                        </p>
                        <a href="#" class="btn btn-primary">
                        Buscar</a>
                        </div>
                    </div>
            </div>
            `;

            $('#recuadro-de-ropa').append(html);
        });
    });
});
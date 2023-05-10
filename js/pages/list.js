function list () {
fetch('http://localhost:8000/carros')
    .then(res => res.json())
    .then(dados => {
        dados.map(cada => {
            table_cars.innerHTML +=`
            <tr>
                <td>${cada.id}</td>
                <td>${cada.marca}</td>
                <td>${cada.modelo}</td>
                <td>${cada.placa}</td>
                <td><img src="${cada.foto}" width="100px"></td>
            </tr>
            `
        })
    });

    return `
    <table class="table table-hover table-striped">
        <thead class="table-dark">
            <tr>
                <th>#ID</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Foto</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody id="table_cars"></tbody>
    </table>
    `;
}
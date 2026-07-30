// Mostrar datos
document.getElementById("nombre").textContent = funcionario.nombre;
document.getElementById("cargo").textContent = funcionario.cargo;
document.getElementById("unidad").textContent = funcionario.unidad;

// Botones
document.getElementById("btnWhatsapp").href =
    `https://wa.me/${funcionario.whatsapp}`;

document.getElementById("btnLlamar").href =
    `tel:${funcionario.telefono}`;

document.getElementById("btnCorreo").href =
    `mailto:${funcionario.correo}`;

// Descargar contacto (.vcf)
document.getElementById("btnContacto").addEventListener("click", function(e){

    e.preventDefault();

    const vcf =
`BEGIN:VCARD
VERSION:3.0
FN:${funcionario.nombre}
TITLE:${funcionario.cargo}
ORG:ENDE Corporación
TEL;TYPE=CELL:${funcionario.telefono}
EMAIL:${funcionario.correo}
END:VCARD`;

    const blob = new Blob([vcf], { type: "text/vcard" });

    const enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(blob);

    enlace.download = "Contacto.vcf";

    enlace.click();

    URL.revokeObjectURL(enlace.href);
});

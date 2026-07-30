document.getElementById("nombre").textContent=funcionario.nombre;

document.getElementById("cargo").textContent=funcionario.cargo;

document.getElementById("unidad").textContent=funcionario.unidad;

document.getElementById("txtWhatsapp").textContent=funcionario.telefono;

document.getElementById("txtCorreo").textContent=funcionario.correo;

document.getElementById("txtTelefono").textContent=funcionario.telefono;

document.getElementById("btnWhatsapp").href="https://wa.me/"+funcionario.whatsapp;

document.getElementById("btnCorreo").href="mailto:"+funcionario.correo;

document.getElementById("btnLlamar").href="tel:"+funcionario.telefono;

document.getElementById("btnContacto").addEventListener("click",function(e){

e.preventDefault();

const vcf=`BEGIN:VCARD
VERSION:3.0
FN:${funcionario.nombre}
TITLE:${funcionario.cargo}
ORG:ENDE Corporación
TEL:${funcionario.telefono}
EMAIL:${funcionario.correo}
END:VCARD`;

const blob=new Blob([vcf],{type:"text/vcard"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="Contacto.vcf";

a.click();

});
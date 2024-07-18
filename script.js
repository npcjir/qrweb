function generateCodes() {
    const inputText = document.getElementById("inputText").value;
    if (!inputText) {
        alert("Por favor, ingresa un texto.");
        return;
    }

    // Generar código QR
    const qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        data: inputText,
        dotsOptions: {
            color: "#000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#fff",
        }
    });

    // Limpiar el contenedor del QR para evitar duplicados
    document.getElementById("qrCode").innerHTML = "";
    qrCode.append(document.getElementById("qrCode"));

}

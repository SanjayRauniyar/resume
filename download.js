window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const resume = this.document.getElementById("resume");
            console.log(resume);
            console.log(window);

            var opt = {
                filename: 'ResumeSanjayRauniyar.pdf',
                /*image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },*/
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' , putOnlyUsedFonts:true}
            };
            html2pdf().from(resume).set(opt).save();
        })
}
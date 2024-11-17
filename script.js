function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function openQuickView(sareeId) {
    var sareeImages = [
        [
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/pattu-2.jpg?alt=media&token=bf3ba040-997d-42ba-807c-8db32a643e2d",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/pattu-3.jpg?alt=media&token=48c5659f-c664-4a84-aaa9-9615c41d27a9",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/pattu-4.jpg?alt=media&token=d9c9ab4e-2c36-4b89-ac0d-5ba69a993ecf",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/pattu-5.jpg?alt=media&token=67dc6e08-3867-424d-a3d9-9e62f8932124",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/pattu-6.jpg?alt=media&token=d0b19106-cfad-4a24-abfc-09ccfa32bfa2"
        ],
        [
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/chenderi-2.jpg?alt=media&token=4631321d-f7ad-492e-ac6b-1c87627530bf",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/chenderi-3.jpg?alt=media&token=af7d095e-9a54-4381-b6ae-3bd9917f3fd4",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/chenderi-4.jpg?alt=media&token=db1a6fcd-f35c-4389-b52f-fb8a231b7412",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/chenderi-5.jpg?alt=media&token=3a4f86d6-5208-4ba1-a090-27b7be463246",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/chenderi-6.jpg?alt=media&token=996f1227-f090-4992-ac33-4506550de3ef",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/chenderi-7.jpg?alt=media&token=65615268-97d4-4afb-90d5-71ae8dd50e9b"
        ],
        [
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/Tusser-2.jpg?alt=media&token=bcd2bd5a-b72a-4d05-a2b9-bd8a08a27cd4",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/Tusser-3.jpg?alt=media&token=45b688c7-3bca-4691-876e-973cebff9433",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/Tusser-4.jpg?alt=media&token=a80d9a8f-51cc-4f69-a196-ec2a117e4d6d",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/Tusser-5.jpg?alt=media&token=c5ed6d9f-a845-4787-9935-ba67ab04fd03",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/Tusser-6.jpg?alt=media&token=933a33e0-3a1e-4364-b656-07b480132008",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/Tusser-7.jpg?alt=media&token=36fbef54-2c97-4b01-aa26-4dcd4ac0574f"
        ],
        [
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/banglore-silks-1.jpg?alt=media&token=1ecb3bd6-8ed4-4456-a729-dbf6f839bcff",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/banglore-silks-2.jpg?alt=media&token=d9f561ae-f382-40cf-b694-15668c5799c4",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/banglore-silks-3.jpg?alt=media&token=982b6371-4057-441f-ac5a-2c79396e5268",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/banglore-silks-4.jpg?alt=media&token=302bb537-ab09-46c4-b155-63063aca7bcd",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/banglore-silks-5.jpg?alt=media&token=3499a7fe-61d4-48af-ae64-5db6df900436",
            "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/banglore-silks-6.jpg?alt=media&token=4f9bce07-7845-4050-8f72-c6d342cef9b5"
        ]
    ];

    var saree = sareeImages[sareeId - 1];
    var modalContent = "";
    saree.forEach(function (image) {
        modalContent += `<img src="${image}" alt="Saree Image" class="quick-view-image">`;
    });
    document.getElementById("quickViewGallery").innerHTML = modalContent;
    document.getElementById("quickViewModal").style.display = "flex";
}

function closeQuickView() {
    document.getElementById("quickViewModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const virtualTourButton = document.getElementById("virtual-tour-button");
    const virtualTourContainer = document.getElementById("virtual-tour-container");
    const panoramaListContainer = document.getElementById("panorama-list");

    virtualTourButton.addEventListener("click", function () {
        const projectId = this.dataset.projectId; // ������Ʈ ID ��������
        fetch('/virtual_tour/panoramas/${projectId}/')
            .then(response => response.json())
            .then(data => {
                panoramaListContainer.innerHTML = "";
                data.forEach(panorama => {
                    const panoramaItem = document.createElement("div");
                    panoramaItem.classList.add("panorama-item");
                    panoramaItem.innerHTML = `
                        <img src="${panorama.image}" alt="${panorama.name}" class="panorama-thumbnail" />
                        <p>${panorama.name}</p>
                    `;
                    panoramaItem.addEventListener("click", function () {
                        loadPanorama(panorama.image);
                    });
                    panoramaListContainer.appendChild(panoramaItem);
                });

                virtualTourContainer.style.display = "block"; // ���� ���� ȭ�� ǥ��
            })
            .catch(error => console.error("Error fetching panoramas:", error));
    });

    function loadPanorama(imageUrl) {
        const viewer = document.getElementById("panorama-viewer");
        viewer.style.backgroundImage = 'url(${imageUrl})';
        viewer.style.display = "block";
    }
});
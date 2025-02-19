// Function to initialize the SOS app link

function initSOSApp() {
    const sosApp = document.querySelector('.sos-app');

    if (sosApp) { // Only add event listener if the element exists
        sosApp.addEventListener('click', () => {
            window.location.href = 'https://apps.powerapps.com/play/e/default-43f93f8a-55a8-4263-bd84-e03688a2ab2d/a/7f81a035-8f70-464b-844f-34cb91e8d21e?tenantId=43f93f8a-55a8-4263-bd84-e03688a2ab2d&hint=5653abc4-556e-4c76-a02c-8261be95544f&sourcetime=1727750583995&source=portal';
        });
    } else {
        console.warn('SOS App button not found');
    }
}

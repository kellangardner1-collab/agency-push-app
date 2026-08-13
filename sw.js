self.addEventListener('push', function(event) {
    let payload = event.data ? event.data.text() : 'New agency checklist compiled!';
    
    const options = {
        body: payload,
        icon: 'https://flaticon.com',
        badge: 'https://flaticon.com',
        vibrate:,
        data: { dateOfArrival: Date.now() }
    };

    event.waitUntil(
        self.registration.showNotification('AI Automation Engine', options)
    );
});

self.addEventListener('push', function(event) {
    let data = { title: 'AI Automation Engine', body: 'New agency checklist compiled!' };
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }
    
    const options = {
        body: data.body,
        icon: 'https://flaticon.com',
        badge: 'https://flaticon.com',
        vibrate:,
        data: { dateOfArrival: Date.now() }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Immediately activate across all background windows upon compilation
self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

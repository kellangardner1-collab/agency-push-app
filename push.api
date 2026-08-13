const webpush = require('web-push');

// Initialize security keys natively on your hidden Vercel server backend
webpush.setVapidDetails(
  'mailto:kellan.gardner1@gmail.com',
  'BFlMq1OPn2NAfZJFg-lwbOZAPgSj0WX6ngcf5JD-NLQ4_BpE_MHLkhUJqXNu3S22C1xaWPxi2ocZKNxax5LDegg',
  'UT7Efv7GNpaUwvOM_jOnyd0Bf29VZxB-BgiXr6QFPrQ'
);

module.exports = async (req, res) => {
  // Lock out tracking scrapers and enforce strict POST validation
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Enforce POST protocol.' });
  }

  try {
    const { subscription, notification } = req.body;

    if (!subscription || !notification) {
      return res.status(400).json({ error: 'Missing payload parameters.' });
    }

    // Build the visual text payload string
    const payload = JSON.stringify({
      title: notification.title || 'AI Automation Update',
      body: notification.body || 'New message processed successfully.'
    });

    // Fire the wireless packet directly to Apple's notification pipeline
    await webpush.sendNotification(subscription, payload);

    return res.status(200).json({ success: true, message: 'Push notification broadcasted successfully.' });
  } catch (error) {
    console.error('Push Service Error:', error);
    return res.status(500).json({ error: 'Failed to broadcast background notification packet.', details: error.message });
  }
};

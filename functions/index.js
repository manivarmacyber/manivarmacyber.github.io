const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
 * HTTP function to send a push notification to all stored subscriber tokens.
 * Expected payload: { "body": "Standard update content here" }
 */
exports.sendNotificationToAll = functions.https.onRequest(async (req, res) => {
    // Basic security check (Optional: add a secret key check here)
    // if (req.headers.authorization !== 'secret-key') return res.status(403).send('Unauthorized');

    const messageBody = req.body.body || "New tactical research available.";

    try {
        const subscribersSnapshot = await admin.firestore().collection('subscribers').get();
        const tokens = [];

        subscribersSnapshot.forEach(doc => {
            const data = doc.data();
            if (data.token) {
                tokens.push(data.token);
            }
        });

        if (tokens.length === 0) {
            return res.status(200).send({
                message: "No subscribers found.",
                successCount: 0
            });
        }

        const message = {
            notification: {
                title: "New Blog Published",
                body: messageBody
            },
            tokens: tokens
        };

        const response = await admin.messaging().sendEachForMulticast(message);

        console.log(`Successfully sent ${response.successCount} messages.`);

        return res.status(200).send({
            message: "Notifications dispatched successfully.",
            successCount: response.successCount,
            failureCount: response.failureCount
        });

    } catch (error) {
        console.error("Error sending notifications:", error);
        return res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        });
    }
});

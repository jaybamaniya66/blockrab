// test-connection.js
import net from 'net';

async function testConnection() {
    console.log("🔍 Testing FTP server connectivity...");
    console.log("📍 Host: 82.25.107.88");
    console.log("🔑 Port: 65002");
    
    const client = new net.Socket();
    
    client.setTimeout(10000); // 10 second timeout
    
    client.on('connect', () => {
        console.log("✅ Successfully connected to FTP server!");
        console.log("🌐 The server is reachable.");
        client.destroy();
    });
    
    client.on('timeout', () => {
        console.log("⏱️  Connection timed out after 10 seconds.");
        console.log("❌ The FTP server is not responding.");
        client.destroy();
    });
    
    client.on('error', (err) => {
        console.log("❌ Connection error:", err.message);
        console.log("💡 Possible issues:");
        console.log("   - Server is down");
        console.log("   - Wrong port number");
        console.log("   - Firewall blocking connection");
        console.log("   - Network connectivity issues");
    });
    
    client.on('close', () => {
        console.log("🔌 Connection closed.");
    });
    
    try {
        client.connect(65002, '82.25.107.88');
    } catch (err) {
        console.error("❌ Failed to initiate connection:", err.message);
    }
}

testConnection(); 
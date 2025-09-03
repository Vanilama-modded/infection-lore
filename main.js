document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');

  // Toolbar button actions
  document.getElementById('bold-button').addEventListener('click', () => {
    document.execCommand('bold');
  });

  document.getElementById('italic-button').addEventListener('click', () => {
    document.execCommand('italic');
  });

  document.getElementById('underline-button').addEventListener('click', () => {
    document.execCommand('underline');
  });

  document.getElementById('h1-button').addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'H1');
  });

  document.getElementById('h2-button').addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'H2');
  });

  document.getElementById('h3-button').addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'H3');
  });

  // AI Assistant Logic (Placeholder)
  const aiSendButton = document.getElementById('ai-send-button');
  const aiInput = document.getElementById('ai-input');
  const aiChatbox = document.getElementById('ai-chatbox');

  aiSendButton.addEventListener('click', () => {
    const message = aiInput.value;
    if (message.trim()) {
      // Display user message
      const userMessage = document.createElement('div');
      userMessage.textContent = `You: ${message}`;
      aiChatbox.appendChild(userMessage);

      // Placeholder for AI response
      const aiResponse = document.createElement('div');
      aiResponse.textContent = 'AI: Thinking...'; // Placeholder
      aiChatbox.appendChild(aiResponse);
      
      // TODO: Integrate with Gemini API

      aiInput.value = '';
      aiChatbox.scrollTop = aiChatbox.scrollHeight;
    }
  });
});

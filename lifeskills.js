 // Time Management
    document.getElementById('openTimeManagement').onclick = e => {
      e.preventDefault();
      document.getElementById('timeManagementPage').classList.add('active');
    };
    document.getElementById('closeTimeManagement').onclick = e => {
      e.preventDefault();
      document.getElementById('timeManagementPage').classList.remove('active');
    };

    // Stress Management
    document.getElementById('openStressManagement').onclick = e => {
      e.preventDefault();
      document.getElementById('stressManagementPage').classList.add('active');
    };
    document.getElementById('closeStressManagement').onclick = e => {
      e.preventDefault();
      document.getElementById('stressManagementPage').classList.remove('active');
    };

    // Emotional Intelligence
    document.getElementById('openEmotionalIntelligence').onclick = e => {
      e.preventDefault();
      document.getElementById('emotionalIntelligencePage').classList.add('active');
    };
    document.getElementById('closeEmotionalIntelligence').onclick = e => {
      e.preventDefault();
      document.getElementById('emotionalIntelligencePage').classList.remove('active');
    };
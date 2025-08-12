// Only run scripts on relevant pages
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("events.html")) {
      loadEvents();
    }
    if (window.location.pathname.endsWith("prayer.html")) {
      setupPrayerForm();
    }
    if (window.location.pathname.endsWith("gallery.html")) {
      setupGalleryUploader();
    }
  });
  
  function setupGalleryUploader() {
    const input = document.getElementById("upload-media");
    const gallery = document.getElementById("gallery-container");
  
    if (!input || !gallery) return; // safety check
  
    input.addEventListener("change", () => {
      const files = input.files;
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
  
        if (file.type.startsWith("image/")) {
          const img = document.createElement("img");
          img.src = url;
          img.alt = file.name;
          gallery.appendChild(img);
        } else if (file.type.startsWith("video/")) {
          const video = document.createElement("video");
          video.src = url;
          video.controls = true;
          gallery.appendChild(video);
        }
      }
    });
  }
  
  function loadEvents() {
    const events = [
      { date: "2025-08-25", title: "Community Outreach", location: "Kurnool Church Hall" },
      { date: "2025-09-10", title: "Youth Bible Study", location: "Youth Center" },
      { date: "2025-10-05", title: "Thanksgiving Service", location: "Main Sanctuary" }
    ];
  
    const container = document.getElementById("events-list");
    if (!container) return;
  
    if(events.length === 0){
      container.innerHTML = "<p>No upcoming events at the moment. Stay tuned!</p>";
      return;
    }
  
    let html = "<ul>";
    events.forEach(event => {
      html += `<li><strong>${event.title}</strong> — ${event.date} @ ${event.location}</li>`;
    });
    html += "</ul>";
    container.innerHTML = html;
  }
  
  function setupPrayerForm() {
    const form = document.getElementById("prayer-form");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for submitting your prayer request. We will keep you in our prayers!");
      form.reset();
    });
  }
  
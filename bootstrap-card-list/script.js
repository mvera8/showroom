document.addEventListener('DOMContentLoaded', function () {
    // Sample data for cards or list items
    const data = [
      { title: 'Item 1', description: 'Description for item 1.' },
      { title: 'Item 2', description: 'Description for item 2.' },
      { title: 'Item 3', description: 'Description for item 3.' },
    ];

    // Function to render content based on the selected view
    function renderContent(view) {
      const contentContainer = document.getElementById('contentContainer');
      contentContainer.innerHTML = '';

      if (view === 'card') {
        data.forEach(item => {
          const cardHtml = `
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.description}</p>
                </div>
              </div>
            </div>
          `;
          contentContainer.innerHTML += cardHtml;
        });
      } else if (view === 'list') {
        const listHtml = `
          <ul class="list-group">
            ${data.map(item => `<li class="list-group-item">${item.title}: ${item.description}</li>`).join('')}
          </ul>
        `;
        contentContainer.innerHTML = listHtml;
      }
    }

    // Initial render with card view
    renderContent('card');

    // Event listeners for layout toggle buttons
    const cardViewBtn = document.getElementById('cardViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');

    cardViewBtn.addEventListener('click', () => {
      renderContent('card');
    });

    listViewBtn.addEventListener('click', () => {
      renderContent('list');
    });
  });
const head = document.querySelector('head');
const page = document.getElementById('page');
const style = document.createElement('style');
const sidebar = document.querySelector('.uc-school-lesson-sidebar');
const fake_anchor = document.createElement('a');
const active_lesson = document.querySelector('.is-active');
const uc_scrollable = document.querySelector('.uc-scrollable');

// The new styles.
style.innerHTML = `
  .hide-scrollbar {
    overflow-y: hidden
  }

  div.uc-scrollable {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  div.uc-scrollable::-webkit-scrollbar {
    width: 5px;
    background-color: #2b2b4c;
  }

  div.uc-scrollable::-webkit-scrollbar-thumb {
    background-color: #25b373;
    border-radius: 3px;
  }
`;

// Appends new styles.
head.appendChild(style);

// Hides the page scrollbar that causes a visual bug.
page.classList.add('hide-scrollbar');

// Removes the aside nav.
sidebar.removeChild(uc_scrollable);

// Appends again the element to apply the latest CSS classes.
sidebar.appendChild(uc_scrollable);

// Adds the 'active' id to the active lesson.
active_lesson.id = 'active';

// The new anchor elements now points to the active lesson.
fake_anchor.href = "#active";

// The clicks on the anchor element triggers the 
// scrolling to the active element.
fake_anchor.click();

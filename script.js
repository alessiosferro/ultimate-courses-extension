const head = document.querySelector('head');
const page = document.getElementById('page');
const sidebar = document.querySelector('.uc-school-lesson-sidebar');
const uc_scrollable = document.querySelector('.uc-scrollable');
const active_lesson = document.querySelector('.is-active');
const fake_anchor = document.createElement('a');
const style = document.createElement('style');

// new styles
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

// apends new styles
head.appendChild(style);

// hides the page scrollbar that causes a visual bug
page.classList.add('hide-scrollbar');

// removes the aside nav
sidebar.removeChild(uc_scrollable);

// appends again the element to apply the latest CSS classes
sidebar.appendChild(uc_scrollable);

// adds the id active to the active lesson
active_lesson.id = 'active';

// the new anchor elements now point to the active lesson
fake_anchor.href = "#active";

// the clicks on the anchor element triggers the scrolling to the active element
fake_anchor.click();

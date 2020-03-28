const page = document.getElementById('page');
const head = document.querySelector('head');

const style = document.createElement('style');
style.type = 'text/css';
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
    width: 8px !important;
    background-color: #212121 !important;
  }

  div.uc-scrollable::-webkit-scrollbar-thumb {
    background: #2d2d2d;
  }
`;

head.appendChild(style);

page.classList.add('hide-scrollbar');

const sidebar = document.querySelector('.uc-school-lesson-sidebar');
const uc_scrollable = document.querySelector('.uc-scrollable');

sidebar.removeChild(uc_scrollable);

const uc_scrollable_html = uc_scrollable.innerHTML;
const new_uc_scrollable = document.createElement('div');

new_uc_scrollable.innerHTML = uc_scrollable_html;
new_uc_scrollable.classList.add('uc-scrollable');

new_uc_scrollable.scroll

sidebar.appendChild(new_uc_scrollable);

const activeLesson = document.querySelector('.is-active');
activeLesson.id = 'active';

const fakeAnchor = document.createElement('a');
fakeAnchor.href = "#active";

fakeAnchor.click();

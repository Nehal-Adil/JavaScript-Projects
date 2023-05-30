console.log('This is Sidebar Toggle');

const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', function () {
    console.log(sidebar.classList);
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar")
    } else {
        sidebar.classList.add("show-sidebar")
    }

    // sidebar.classList.toggle("show-sidebar")
    // javascript provides a function .toggle to alter the class inside the DOM 
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove("show-sidebar")
})
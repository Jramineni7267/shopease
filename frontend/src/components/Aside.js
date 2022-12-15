const Aside ={
    render: async () => {
        return `
        <div class="aside-header">
        <div><b>SHOP BY CATEGORY</b></div>
        <button class="aside-close-button" id="aside-close-button">x</button>
        </div>
        <div class="aside-body">
            <ul class="categories">
            <li>
                <a href="/#/?q=shoes">Shoes<span><i class="fa fa-chevron-right"></i></span>
                </a>
            </li>
            <li>
                <a href="/#/?q=shirt">Shirts<span><i class="fa fa-chevron-right"></i></span>
                </a>
            </li>
            </ul>
        </div>`;
    },
    after_render: async () =>{
        document.getElementById('aside-container').classList.remove('open');
        document
        .getElementById('aside-close-button')
        .addEventListener('click',async() =>{
            document.getElementById('aside-container').classList.remove('open');
        });
    },
};

export default Aside;
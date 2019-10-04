(function () {
    const blog = document.getElementById('blog');
    const github = document.getElementById('github');
    blog.addEventListener('click',() => {
        const dom = document.createElement('a');
        dom.href="http://blog.withzhaoyu.com";
        dom.target="_blank";
        dom.click();
    })
    github.addEventListener('click',() => {
        const dom = document.createElement('a');
        dom.href="http://github.com/withzhaoyu";
        dom.target="_blank";
        dom.click();
    })
})()
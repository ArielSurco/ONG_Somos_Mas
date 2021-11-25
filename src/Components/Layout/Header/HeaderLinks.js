export const navLinks = [
    {text: 'Inicio', link: '/', private:false, active:true},
    {text: 'Nosotros', link: '/nosotros', private:false, active:false},
    {text: 'Contacto', link: '/contacto', private:false, active:false},
    {text: 'Campaña escolar', link: '/school-campaign', private:false, active:false},
    {text: 'Campaña de juguetes', link: '/toys-campaign', private:false, active:false}
]
export const manageLinkActivation = (pathname) => {
    console.log(navLinks)
    navLinks.forEach((navLink, index) => {
        if(navLink.link == pathname)
            navLinks[index].active = true;
        else if(navLink.active == true)
            navLinks[index].active = false;
    })
    console.log(navLinks)
}

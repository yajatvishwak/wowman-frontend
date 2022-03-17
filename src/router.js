import Home from './pages/Home.svelte'
import Preview from './pages/Preview.svelte'
import Offering from './pages/Offering.svelte'
import AddOffering from './pages/AddOffering.svelte'
import Profile from './pages/Profile.svelte'

const routes = {
    // Exact path
    '/': Preview,
    '/home' : Home,
    '/offering' : Offering,
    '/add-offering' : AddOffering,
    '/profile' : Profile,

}
export default routes;
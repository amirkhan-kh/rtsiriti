import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../layouts/main-page";
import { AboutInstitut, Conferences, Content, Doctorate, EventsRanking, Graduates, InstitutProps, InstitutStructure, InstitutTeam, InternalDocuments, InternContacts, Laboratories, News, ReceptionDays, ScientificCouncil, StateSymbols, Students, Teachers } from "../layouts/pages";
import NotFound from "../layouts/pages/not-found";

export const children = [  
    { path: "/", element: <MainPage />},
    { path: "/graduates", element: <Graduates/>},
    { path: "/state-symbols", element: <StateSymbols/>},
    { path: "/students", element: <Students/> },
    { path: "/teachers", element: <Teachers/> },
    { path: "/about-institut", element: <AboutInstitut/> },
    { path: "/events-ranking", element: <EventsRanking/> },
    { path: "/institut-structure", element: <InstitutStructure/> },
    { path: "/institut-team", element: <InstitutTeam/> },
    { path: "/international-contacts", element: <InternContacts/> },
    { path: "/internal-documents", element: <InternalDocuments/> },
    { path: "/scientific-council", element: <ScientificCouncil/> },
    { path: "/institut-props", element: <InstitutProps/> },
    { path: "/reception-days", element: <ReceptionDays/> },
    { path: "/conferences", element: <Conferences/> },
    { path: "/doctorate", element: <Doctorate/> },
    { path: "/laboratories", element: <Laboratories/> },
    { path: "/news", element: <News/> },
    { path: "/single/:type/:id", element: <Content/> },
    { path: "*", element: <NotFound/>}

];
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [...children]
    }
]);

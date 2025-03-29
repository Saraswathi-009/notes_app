import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { SideBar } from "../../components/Sidebar"
import { useNotes} from "../../context/notes.context"
import { NotesCard } from "../../components/NotesCard"

export const Bin = () => {

    const {bin} = useNotes()
    return (
        <Fragment>
            <Navbar />
            <main style={{ display: "flex" }}>
                <SideBar />
                <div style={{ position: "relative", paddingLeft: "10px" }} >
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        marginTop: "20px",
                        margin: '20px',
                        position: "relative",
                    }} >

                        {
                            bin?.length > 0 && bin.map(({ id, title, text, isPinned }) => (
                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />

                            ))
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
import { Navbar } from "../../components/Navbar";
import { Fragment } from "react";
import { SideBar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes.context";

export const Home = () => {

  const { title, text, notes,archive, notesDispatch } = useNotes()

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value
    })
  }

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value
    })
  }


  const onAddClick = () => {
    notesDispatch({
      type: 'ADD_NOTE'
    })
    notesDispatch({
      type: 'CLEAR_INPUT'
    })
  }

  const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned)
  const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned)

  console.log(archive)


  return (
    <Fragment>
      <Navbar />
      <main style={{ display: "flex", height: "100vh", }}>
        <SideBar />
        <div style={{ position: "relative", paddingLeft: "10px" }} >
          <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "5px" }}>Add Note</h1>
          <div style={{ border: "2.5px solid #000", padding: "1px", borderRadius: "5px", width: "200px", height: "auto", marginBottom: "20px", }}>
            <div style={{ display: "flex", flexDirection: "column", padding: "9px", overflow: "auto" }}>

              <input
                value={title}
                onChange={onTitleChange}
                placeholder="Enter Title"
                style={{ width: "100%", padding: "1px", fontSize: "16px", borderRadius: "5px", border: "2.2px solid #000", marginBottom: "10px" }} />


              <textarea
                value={text}
                onChange={onTextChange}
                placeholder="Enter Text"
                style={{ width: "100%", padding: "1px", fontSize: "16px", borderRadius: "5px", border: "2.2px solid #000", marginBottom: "10px" }} />


              <button
                disabled={title.length === 0}
                onClick={onAddClick}
                style={{
                  marginTop: "auto",
                  padding: "1px",
                  backgroundColor: "#dde2ff",
                  color: "#000",
                  borderRadius: "5px",
                  border: "2.2px solid #000",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <span class="material-symbols-outlined">
                  add
                </span>
              </button>
            </div>
          </div>

        
          {
            pinnedNotes?.length > 0 && (
              <>
                <h3 style={{ marginTop: '20px' ,fontWeight:'bold',fontSize:'20px'}}> Pinned Notes</h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "20px",
                  position: "relative",
                }} >

                  {
                    pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                      <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />

                    ))
                  }
                </div>
              </>
            )
          }

          {
            pinnedNotes?.length > 0 && <h3 style={{ marginTop: '20px' ,fontWeight:'bold',fontSize:'20px'}}>Other Notes</h3>
          }
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
            position: "relative",
          }} >
            {
              otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => (
                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />

              ))
            }
          </div>
        </div>
      </main>
    </Fragment>
  );
};



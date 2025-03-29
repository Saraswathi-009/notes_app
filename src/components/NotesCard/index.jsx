import { useNotes } from "../../context/notes.context"
import { findNotesInArchive } from "../../utils/findNotesinArchive"
import { findNotesInBin } from "../../utils/findNotesinBin"
import { findNotesInImportant } from "../../utils/findNotesinImportant"

export const NotesCard = ({ id, title, text, isPinned }) => {


    const { notesDispatch, archive, bin, important } = useNotes()

    const isNotesInArchive = findNotesInArchive(archive, id)

    const isNotesInBin = findNotesInBin(bin, id)

    const isNotesInImportant = findNotesInImportant(important, id)

    const onPinClick = () => {
        notesDispatch({
            type: 'PIN',
            payload: { id }
        })
    }

    const OnArchiveClick = () => {
        !isNotesInArchive ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }


    const OnBinClick = () => {
        !isNotesInBin ? notesDispatch({
            type: 'ADD_TO_BIN',
            payload: { id }
        }) : notesDispatch({
            type: 'DELETE_FROM_BIN',
            payload: { id }
        })
    }


    const OnImportantClick = () => {
        !isNotesInImportant ? notesDispatch({
            type: 'ADD_TO_IMPORTANT',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_IMPORTANT',
            payload: { id }
        })
    }




    return (
        <div key={id} style={{ border: "2.5px solid #000", padding: "`3px", borderRadius: "5px", width: "275px", boxSizing: "border-box" }}>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "3px" }}>
                    <p style={{ margin: 0 }}>{title}</p>
                    {
                        !isNotesInBin && !isNotesInArchive && !isNotesInImportant ? <div style={{ padding: "3px", }}>
                            <button onClick={onPinClick}>
                                <span
                                    className="material-symbols-outlined">
                                    {isPinned ? "keep_off" : "keep"}
                                </span>
                            </button>
                        </div> : <></>
                    }

                </div>
                <hr style={{ margin: "3px 0", border: "0", borderTop: "2px solid #000", width: "100%", padding: "2px" }} />
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "3px" }}>
                        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "flex-start", paddingBottom: "3px", width: "80%" }}>
                            <p style={{ margin: 0, whiteSpace: "normal", textOverflow: "ellipsis", overflow: "hidden", width: "80%", wordWrap: "break-word" }}>
                                {text}
                            </p>
                        </div>
                        <div style={{ display: "flex", bottom: "10px", right: "10px", }}>

                            {
                                !isNotesInBin && !isNotesInImportant && (
                                    <>
                                        <button onClick={OnArchiveClick} style={{ marginRight: "1px" }}>
                                            <span
                                                className="material-symbols-outlined">
                                                {isNotesInArchive ? "unarchive" : "archive"}
                                            </span>
                                        </button>
                                    </>
                                )}

                            {
                                !isNotesInArchive &&  !isNotesInBin &&(
                                    <button onClick={OnImportantClick}  >
                                    <span
                                        className="material-symbols-outlined">
                                        {isNotesInImportant ? "label_off" : "label_important"}
                                    </span>
                                </button>
                                )
                            }
                            {
                                isNotesInBin ? (
                                    <>
                                        <button onClick={OnBinClick}>
                                            <span className="material-symbols-outlined">
                                                restore_from_trash
                                            </span>
                                        </button>
                                        <button onClick={() => notesDispatch({
                                            type: 'DELETE_FROM_BIN',
                                            payload: { id }
                                        })}>
                                            <span className="material-symbols-outlined">delete_forever</span>
                                        </button>
                                    </>
                                ) : (
                                    <button onClick={OnBinClick}>
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
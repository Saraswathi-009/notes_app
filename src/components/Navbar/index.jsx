import logo from '../../assets/appimages.png';



export const Navbar = () =>{
    return (
        <>
        <header style={{ display: 'grid', gridTemplateColumns: 'auto 21fr', alignItems: 'center' ,padding:'5px' }}>
            <div>
                <img src={logo} alt='Logo'  style={{ width: '50px', height: '50px'}} />
            </div>
            <h1 style = {{ position: 'absolute',top: '0.6%', left: '4%', color: '#000',fontSize:'34px',fontWeight : 'bolder' }} > NoteApp</h1>
        </header>
        <div style={{
            borderBottom: '2.5px solid #000', 
            width: '100%',  
          }} >
        </div>
       
        </>
        
    )
}
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/Styles/Header/Header.css'
import CreateTask from '../../Component/CreateTask/CreateTask';
import RootContext from '../../RootContext';

function Header() {
    const { user } = useContext(RootContext)
    const [userlogged, setUserLogged] = useState(user)
    const navigate = useNavigate();
    const [showTask, setShowTask] = useState(false);

    return (
        <header>
            <p onClick={() => navigate('/')}>TASKS</p>
            <form onSubmit={(event) => event.preventDefault()}>
                <input type='text' placeholder='Search' />
            </form>
            <div className='newtask' onClick={() => userlogged ? setShowTask(true) : navigate('/')}> + New task</div >

            {
                userlogged && <Link to='/' onClick={() => {
                    setUserLogged(false)
                    window.localStorage.removeItem("userData")
                }} className='link'>Logout</Link>
            }
            {
                <div className='authoptions'>
                    {!userlogged && <> <Link to='/login' className='link'>Login</Link>
                        <Link to='/signup' className='link'>SignUp</Link>
                    </>
                    }
                </div>
            }

            {
                showTask && <CreateTask showTask={showTask} setShowTask={setShowTask} taskName='Add' />
            }
        </header>
    );
}

export default Header;
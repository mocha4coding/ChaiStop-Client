function ThreadTextEditor(props){
    return(
        <div>

            <textarea {...props} className = {"border-2 w-full border-theme_dark-brighter rounded-md p-2 my-2 block " + props.className } placeholder = {props.placeholder}/>

        </div>
    );
}

export default ThreadTextEditor;
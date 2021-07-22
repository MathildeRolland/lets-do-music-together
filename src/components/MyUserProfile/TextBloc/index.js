import React from 'react';
import PropTypes from 'prop-types';
 import { Editor } from '@tinymce/tinymce-react';

// Imports
import './textbloc.scss';
import './skins/ui/LCT/skin.css'

const TextBloc = ({label, data}) => {
    //
    //skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
    //content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
    //skin_url: '/skins/content',
return (
    <div>
        <div className="profile-label">{label}:</div>
        <form className="profile-detail_bloc">
            <Editor
                apiKey='yip33t8cal0zjyycfyc2y5pb8dyjs6bl4vecqdoyl8jj3f07'
                initialValue={data}
                init={{
                menubar: false,
                plugins: [
                    'advlist autolink lists link charmap anchor'
                ],
                toolbar_location: 'bottom',
                toolbar: 'undo redo | ' +
                    'bold italic underline strikethrough | forecolor backcolor removeformat | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist | ' ,
                skin_url: '/src/components/MyUserProfile/TextBloc/skins/ui',
                skin: 'LCT',
                content_style:
                    "@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');",
                
                  
            }}
        />
        </form>
        

    </div>
)};

//Page.propTypes = {
//};

export default TextBloc;

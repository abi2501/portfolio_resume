import React from 'react'

function ProfileInfo(props) {

    const { id, title, img, contact_list, content_list } = props.section

    const divider = (id === 0) ?
        <></>
        : <hr className="h-px w-full my-2 border-t-0 bg-neutral-100 " />

    let profile_image = (img == null) ?
        <></>
        : <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden"><img className="w-full h-full object-cover" src={img} alt="Profile" /></div>

    let contactList = [];

    if (contact_list != null) {
        contactList = contact_list.map((contact, index) => (
            contact.isLink ? <a key={index} className='px-1 underline' href={contact.url}>{contact.text}</a> : <p className='px-1 break-words' key={index}>{contact.text}</p>
        ));
    }

    const contentList = content_list.map((content, index) => (
        <p key={index} className='text-center max-w-xl '>{content}</p>
    ))

    return (
        <>
            <div className='flex flex-col items-center p-2'>
                <h1 className='text-2xl'>{title}</h1>
                {divider}
                <div className='flex flex-row flex-wrap justify-center'>
                    {contactList}
                </div>
                {profile_image}
                {contentList}
            </div>
        </>
    )
}

export default ProfileInfo
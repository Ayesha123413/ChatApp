import React from 'react'
import Avatar from '../../assets/Avatar.png'
import Input from '../../components/Input'
const Dashboard = () => {
  const contacts = [
    {
      name: 'Hajra',
      status: 'online',
      img: Avatar,
    },
    {
      name: 'Wajiha',
      status: 'online',
      img: Avatar,
    },
    {
      name: 'Hadia',
      status: 'offline',
      img: Avatar,
    },
    {
      name: 'Tehniat',
      status: 'online',
      img: Avatar,
    },
    {
      name: 'Zainab',
      status: 'offline',
      img: Avatar,
    },
    {
      name: 'Fatima',
      status: 'online',
      img: Avatar,
    },
  ]
  return (
    <div className="w-full flex overflow-hidden">
      <div className="w-[25%] h-screen bg-secondary overflow-auto ">
        <div className=" flex  items-center my-5 mx-10">
          <div className=" border border-primary rounded-full ">
            <img src={Avatar} className=" w-[60px] h-[60px] rounded-full" />
          </div>
          <div className="ml-3">
            <h3 className="text-2xl">Ayesha</h3>
            <p className="text-lg font-light">My account</p>
          </div>
        </div>
        <hr />
        <div className="mx-10 mt-5 ">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className=" flex  items-center py-4 border-b border-b-gray-300">
                  <div className="flex items-center cursor-pointer">
                    <div className="border border-gray rounded-full">
                      <img
                        src={img}
                        className=" w-[50px] h-[50px] rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-600">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="w-[75%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%]  bg-secondary h-[65px] my-5 rounded-full flex items-center px-10">
          <div className="cursor-pointer rounded-full py-5">
            <img
              src={Avatar}
              className="border border-gray-400 w-[50px] h-[50px] rounded-full"
            />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg ">Hajra</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="h-[80%] border-b w-full overflow-auto">
          <div className="p-5">
            <div className=" max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-3 mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-3 text-white  mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className=" max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-3 mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-3 text-white  mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className=" max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-3 mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-3 text-white  mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
          </div>
        </div>
        <div className="h-[12%] p-14 w-full flex items-center">
          <Input
            placeholder="type your message..."
            className="w-[75%]"
            inputClassName=" p-4 border-0 shadow-md rounded-full bg-light outline-none "
          />
          <div className="ml-4 cursor-pointer bg-light rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div className="ml-4 cursor-pointer bg-light rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 12l6 0" />
              <path d="M12 9l0 6" />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="w-[25%] h-screen "></div> */}
    </div>
  )
}

export default Dashboard

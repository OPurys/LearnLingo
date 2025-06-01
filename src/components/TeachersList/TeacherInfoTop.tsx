import Icon from '../ui/Icon';

const TeacherInfoTop = () => {
  return (
    <div className="mb-8 flex justify-between">
      <div>
        <p className="mb-2 font-medium text-lightGrey text-base/4">Languages</p>
        <p className="font-medium text-2xl/6">Jane Smith</p>
      </div>
      <div className="flex gap-16">
        <ul className="font-medium flex text-base/4 h-4">
          <li className="pr-4 flex gap-2 border-r border-blackLight">
            <Icon
              className="fill-none stroke-black"
              id="icon-book"
              w={16}
              h={16}
            />
            Lessons online
          </li>
          <li className="px-4 border-r border-blackLight">
            Lessons done: 1098
          </li>
          <li className="px-4 flex gap-2 border-r border-blackLight">
            <Icon id="icon-star" w={16} h={16} />
            Rating: 4.8
          </li>
          <li className="pl-4">
            Price / 1 hour: <span className="text-accentGreen">30$</span>
          </li>
        </ul>
        <Icon
          className="fill-none stroke-black"
          id="icon-heart"
          w={20}
          h={20}
        />
      </div>
    </div>
  );
};

export default TeacherInfoTop;

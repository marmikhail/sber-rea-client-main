import {Tabs, TabItem} from '@sberdevices/plasma-ui';

const DAYS_NAMES = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

type DaysTabsProps = {
    className?: string;

    currentTab: number;
    setCurrentTab: (val: number) => void;
};

const DaysTabs: React.VFC<DaysTabsProps> = ({className, currentTab, setCurrentTab}) => (
    <div className={className}>
        <Tabs forwardedAs="ul">
            {DAYS_NAMES.map((name, ind) => (
                <TabItem key={ind} isActive={ind === currentTab} onClick={() => setCurrentTab(ind)} forwardedAs="li">
                    {name}
                </TabItem>
            ))}
        </Tabs>
    </div>
);

export default DaysTabs;

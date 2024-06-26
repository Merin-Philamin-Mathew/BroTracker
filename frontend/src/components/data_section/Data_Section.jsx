
import GraphCalender from '../utils/GraphCalender';
import GitHubSection from './GitHubSection';
import LeetCodeSection from './LeetCodeSection';
import MonkeyTypeSection from './MonkeyTypeSection';

function Data_Section({icon,data}) {
    
   
  return (
    <div className='flex'>
         
      {/* <GraphCalender isShow={icon == 'leetcode'} active_days={ data.leetcodeDetails.active_days}/> */}
        {icon == 'leetcode' && <LeetCodeSection data={data.leetcodeDetails}/>}
        {icon == 'github' && <GitHubSection data={data.githubDetails}/>}
        {icon == 'monkeytype' && <MonkeyTypeSection data={data.monkeytypeDetails}/>}
    </div>
  )
}

export default Data_Section

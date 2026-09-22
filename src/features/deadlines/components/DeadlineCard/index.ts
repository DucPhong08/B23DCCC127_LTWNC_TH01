// [Buổi 2]: Compound Component Pattern cho thẻ bài tập
import { DeadlineCardRoot } from './DeadlineCard';
import { Header } from './Header';
import { Content } from './Content';
import { DueBadge } from './DueBadge';
import { Actions } from './Actions';

export const DeadlineCard = Object.assign(DeadlineCardRoot, {
  Header,
  Content,
  DueBadge,
  Actions
});

export default DeadlineCard;

import { BadgeGroup } from "../src";
import { Badge } from "../src";
import { Icon } from "@andromedaprotocol/icon";

export default {
  title: "BadgeGroup",
  component: BadgeGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex flex-col space-y-3">
    <div className="flex flex-col space-y-3">
      <BadgeGroup color="primary">
        <Badge color="primary" variant="white">
          Success
        </Badge>
        <span>We’ve just released a new feature</span>
      </BadgeGroup>
      <BadgeGroup color="primary" size="lg">
        <Badge color="primary" variant="white" size="lg">
          Success
        </Badge>
        <span>We’ve just released a new feature</span>
      </BadgeGroup>
      <BadgeGroup color="primary">
        <span>We’ve just released a new feature</span>
        <Badge color="primary" variant="white">
          Success
        </Badge>
      </BadgeGroup>
      <BadgeGroup color="primary" size="lg">
        <span>We’ve just released a new feature</span>
        <Badge color="primary" variant="white" size="lg">
          Success
        </Badge>
      </BadgeGroup>
    </div>

    <div className="flex flex-col space-y-3">
      <BadgeGroup variant="dark" color="primary">
        <Badge color="primary" variant="light">
          Success
        </Badge>
        <span>We’ve just released a new feature</span>
      </BadgeGroup>
      <BadgeGroup variant="dark" color="primary" size="lg">
        <Badge color="primary" variant="light" size="lg">
          Success
        </Badge>
        <span>We’ve just released a new feature</span>
      </BadgeGroup>
      <BadgeGroup variant="dark" color="primary">
        <span>We’ve just released a new feature</span>
        <Badge color="primary" variant="light">
          Success
        </Badge>
      </BadgeGroup>
      <BadgeGroup variant="dark" color="primary" size="lg">
        <span>We’ve just released a new feature</span>
        <Badge color="primary" variant="light" size="lg">
          Success
        </Badge>
      </BadgeGroup>
    </div>

    <div className="flex flex-col space-y-3">
      <BadgeGroup variant="light" color="primary">
        <Badge color="primary" variant="solid">
          Success
        </Badge>
        <span>We’ve just released a new feature</span>
      </BadgeGroup>
      <BadgeGroup variant="light" color="primary" size="lg">
        <Badge color="primary" variant="solid" size="lg">
          Success
        </Badge>
        <span>We’ve just released a new feature</span>
      </BadgeGroup>
      <BadgeGroup variant="light" color="primary">
        <span>We’ve just released a new feature</span>
        <Badge color="primary" variant="solid">
          Success
        </Badge>
      </BadgeGroup>
      <BadgeGroup variant="light" color="primary" size="lg">
        <span>We’ve just released a new feature</span>
        <Badge color="primary" variant="solid" size="lg">
          Success
        </Badge>
      </BadgeGroup>
    </div>
  </div>
);

export const colored = () => (
  <div className="flex flex-col space-y-3">
    <BadgeGroup color="primary">
      <Badge color="primary">Success</Badge>
      <span>We’ve just released a new feature</span>
    </BadgeGroup>

    <BadgeGroup color="success">
      <Badge color="success">Success</Badge>
      <span>We’ve just released a new feature</span>
    </BadgeGroup>
    <BadgeGroup color="warning">
      <Badge color="warning">Success</Badge>
      <span>We’ve just released a new feature</span>
    </BadgeGroup>

    <BadgeGroup color="error">
      <Badge color="error">Success</Badge>
      <span>We’ve just released a new feature</span>
    </BadgeGroup>
  </div>
);

export const customized = () => (
  <div className="flex flex-col space-y-3">
    <BadgeGroup color="primary" variant="light">
      <Badge color="primary" variant="white">
        Success
      </Badge>
      <span>We’ve just released a new feature</span>
      <Icon className="w-4 h-4" name="arrow-right" label={""} />
    </BadgeGroup>
    <BadgeGroup color="primary">
      <span>We’ve just released a new feature</span>
      <Badge color="primary" variant="white">
        Success
        <Icon className="w-4 h-4 ml-1" name="arrow-right" label={""} />
      </Badge>
    </BadgeGroup>
  </div>
);

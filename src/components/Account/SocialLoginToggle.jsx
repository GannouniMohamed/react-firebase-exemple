import React from 'react'
import { Icon, Container, Button } from 'semantic-ui-react'

const SocialLoginToggle = ({ onlyOneLeft, isEnabled, signInMethod, onLink, onUnlink }) =>
  isEnabled ? (
    <Container>
      <Button fluid type='button' onClick={() => onUnlink(signInMethod.id)} disabled={onlyOneLeft}>
        <Icon name={signInMethod.icon} /> Deactivate {signInMethod.id}
      </Button>
    </Container>
  ) : (
    <Container>
      <Button fluid type='button' onClick={() => onLink(signInMethod.provider)}>
        Link {signInMethod.id}
      </Button>
    </Container>
  )

export default SocialLoginToggle;

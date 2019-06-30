#include <vector>
#include <iostream>

struct State
{
    State( int state ) : m_state( state ){}
    ~State() { std::cout << "~State(), m_state=" << m_state << std::endl; }

    void setState( int state ){ m_state = state; }
    int getState() const{ return m_state; }

    void print() const { std::cout << "State::print: " << m_state << std::endl; }

private:
    int m_state;
};

int main()
{
    std::vector<State*> vect;

    vect.push_back( new State(0) );
    vect.push_back( new State(1) );
    vect.push_back( new State(2) );
    vect.push_back( new State(3) );

    std::for_each( vect.begin(), vect.end(), std::mem_fun( &State::print ) );
    
    
    system( "pause" );
    return 0;
}
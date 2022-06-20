               @if (session()->has('message'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                  <p >{{session('message')}}</p>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               @elseif(session()->has('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                  <p >{{session('error')}}</p>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               @else

               @endif